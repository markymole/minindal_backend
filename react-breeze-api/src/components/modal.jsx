import React from 'react'

export function Modal (){
    const toggleCollapse = (elementId, show = true) => {
        const collapseEl = document.getElementById(elementId);
      
        if (show) {
          collapseEl.classList.remove('hidden');
        } else {
          collapseEl.classList.add('hidden');
        }
      }; // Toggle target elements using [data-collapse-toggle]
      
      
      document.querySelectorAll('[data-collapse-toggle]').forEach(function (collapseToggleEl) {
        var collapseId = collapseToggleEl.getAttribute('data-collapse-toggle');
        collapseToggleEl.addEventListener('click', function () {
          toggleCollapse(collapseId, document.getElementById(collapseId).classList.contains('hidden'));
        });
      });
      window.toggleCollapse = toggleCollapse;
      
      const toggleModal = (modalId, show = true) => {
        const modalEl = document.getElementById(modalId);
      
        if (show) {
          modalEl.classList.add('flex');
          modalEl.classList.remove('hidden');
          modalEl.setAttribute('aria-modal', 'true');
          modalEl.setAttribute('role', 'dialog');
          modalEl.removeAttribute('aria-hidden'); // create backdrop element
      
          var backdropEl = document.createElement('div');
          backdropEl.setAttribute('modal-backdrop', '');
          backdropEl.classList.add('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40');
          document.querySelector('body').append(backdropEl);
        } else {
          modalEl.classList.add('hidden');
          modalEl.classList.remove('flex');
          modalEl.setAttribute('aria-hidden', 'true');
          modalEl.removeAttribute('aria-modal');
          modalEl.removeAttribute('role');
          document.querySelector('[modal-backdrop]').remove();
        }
      };
      
      window.toggleModal = toggleModal;
      document.querySelectorAll('[data-modal-toggle]').forEach(function (modalToggleEl) {
        var modalId = modalToggleEl.getAttribute('data-modal-toggle');
        var modalEl = document.getElementById(modalId);
      
        if (modalEl) {
          if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
            modalEl.setAttribute('aria-hidden', 'true');
          }
      
          modalToggleEl.addEventListener('click', function () {
            toggleModal(modalId, modalEl.hasAttribute('aria-hidden', 'true'));
          });
        }
      });
      document.querySelectorAll('[data-tabs-toggle]').forEach(function (tabsToggleEl) {
        const tabsToggleElementsId = tabsToggleEl.getAttribute('id');
        const tabsToggleElements = document.querySelectorAll('#' + tabsToggleElementsId + ' [role="tab"]');
        var activeTabToggleEl = null;
        var activeTabContentEl = null;
        tabsToggleElements.forEach(function (tabToggleEl) {
          tabToggleEl.addEventListener('click', function (event) {
            var tabToggleEl = event.target;
            var tabTargetSelector = tabToggleEl.getAttribute('data-tabs-target');
            var tabContentEl = document.querySelector(tabTargetSelector); // don't do anything if it's already active
      
            if (tabToggleEl !== activeTabToggleEl) {
              // find currently active tab toggle and content if not set
              if (!activeTabToggleEl && !activeTabContentEl) {
                activeTabToggleEl = document.querySelector('#' + tabsToggleElementsId + ' [aria-selected="true"]');
                activeTabContentEl = document.querySelector(activeTabToggleEl.getAttribute('data-tabs-target'));
              } // show and activate tab
      
      
              tabToggleEl.classList.add('active');
              tabToggleEl.setAttribute('aria-selected', true);
              tabContentEl.classList.remove('hidden'); // hide and deactive currently active tab toggle and content
      
              activeTabToggleEl.setAttribute('aria-selected', false);
              activeTabToggleEl.classList.remove('active');
              activeTabContentEl.classList.add('hidden'); // set currently active toggle and content tabs
      
              activeTabToggleEl = tabToggleEl;
              activeTabContentEl = tabContentEl;
            }
          });
        });
      });
      
  return (
    <div>
        <div class="max-w-2xl mx-auto">
        
        {/* <!-- Modal toggle --> */}
        <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
        Toggle login modal
        </button>

        {/* <!-- Main modal --> */}
        <div id="authentication-modal" aria-hidden="true" class="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
            <div class="relative w-full max-w-md px-4 h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                    <div class="flex justify-end p-2">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""></input>
                        </div>
                        <div>
                            <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""></input>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""></input>
                                </div>
                                <div class="text-sm ml-3">
                                <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div> 

        <p class="mt-5">This modal element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a class="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
        </div>
    </div>

  )
}


export default Modal