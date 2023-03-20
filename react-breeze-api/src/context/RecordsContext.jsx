import React, {createContext, useState, useEffect} from 'react'
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";
import useAuthContext from './Authentication';

const RecordsContext = createContext();

export const RecordsProvider = ({children}) => {
    //date
    const today = new Date();
    const numberOfDaysToAdd = 0;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
    const defaultTimeValue = new Date(date).toISOString().split('T')[0]
  
    const { user } = useAuthContext();

    const initialForm = {
        business_name: "",
        description: "",
        address: "",
        type: "",
        category: "",
        specialties: "",
        price_range: "",
        operating_from: "",
        operating_to: "",
        open_from: "",
        open_to: "",
        rating: 0,
        service_options: "",
        phone_number_one: "",
        phone_number_two: "",
        email: "",
        socials: "",
        town: "",
        latitude: 0,
        longitude: 0,
        cover_image: "",
        image_name: "",
        imagedata: "",
        date_applied: defaultTimeValue,
        date_approved: defaultTimeValue,
        date_archived: defaultTimeValue
    }

    const initialFormTown = {
      town: "",
      slug: "",
      latitude: 0,
      longitude: 0,
    }

    const initialReviewForm = {
      business_name: "",
      comment: "",
      rating: "",
      review_image: "",
      image_name: "",
      imagedata: "",
      author: ""
    }

    const [formValues, setFormValues] = useState(initialForm);
    const [townFormValues, setTownFormValues] = useState(initialFormTown);
    const [reviewValues, setReviewValues] = useState(initialReviewForm);

    
    const [reviews, setReviews] = useState([]);
    const [records, setRecords] = useState([]);
    const [record, setRecord] = useState([]);

    const [pendingRecords, setPendingRecords] = useState([]);
    const [pendingRecord, setPendingRecord] = useState([]);


    const [newFrom, setNewFrom] = useState("");
    const [newTo, setNewTo] = useState("");


    const [towns, setTowns] = useState([]);
    const [town, setTown] = useState([]);

    const [errors, setErrors] = useState({});
    const [isOpen, setModal] = useState(false);
    const [isEditOpen, setEditModal] = useState(false);

    const [result, setResult] = useState(null);
    const [townResult, setTownResult] = useState(null);

    const [reviewResult, setReviewResult] = useState(null);


    const [delResult, setDelResult] = useState(false);

    const [updateResult, setUpdateResult] = useState(null);
    const [archiveResult, setArchiveResult] = useState(null);

    const [archives, setArchives] = useState([]);
    const [archive, setArchive] = useState([]);

    const [loading ,setLoading] = useState(true);

    //Spinner
    const [spinner, setSpinner] = useState(false);

    //tags
    const [tags, setTags] = useState([]);
    const [o_options, setO] = useState([]);

    const navigate = useNavigate();
  

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    const onChangeReview = (e) => {
      const { name, value } = e.target;
      setReviewValues({ ...reviewValues, [name]: value });
    };

    const onChangeTown = (e) => {
      const targetVal = e.target.value
      setTownFormValues({ town: targetVal, slug: targetVal });
    };

    function clearFormValues(){
      setFormValues(initialForm);
      setTags([]);
    }

    
    function closeDelResult(){
        setTimeout(() => {
          setDelResult(false);
        }, 5000)
    }
  
    function closeDelResultFast(){
        setArchiveResult(false);
    }

    function closeArchived(){
        setTimeout(() => {
          setArchiveResult(null);
        }, 5000)
    }
  
    function closeArchivedFast(){
        setArchiveResult(null);
    }

    function closeTownResult(){
      setTimeout(() => {
        setTownResult(null);
      }, 5000)
    }

    function closeTownFast(){
        setTownResult(null);
    }


    function closeResult(){
      setTimeout(() => {
        setResult(null);
      }, 5000)
    }

    function closeResultFast(){
        setResult(null);
    }

    function closeUpdateResult(){

      setTimeout(() => {
        setUpdateResult(null);
      }, 5000)
    }

    function closeUpdateResultFast(){
        setUpdateResult(null);
    }

    const getPendings = async () => {
        setLoading(true);
        const apiRecords = await axios.get("api/data/pendings");
        let fetchedData = apiRecords.data.data;
        //filtering of records based on town and role of the admin
         if(user.role == "Super Admin"){
          setPendingRecords(apiRecords.data.data);
        }
        else{
          let town = user.town;
          const filtered = fetchedData.filter((fetchedData) => {
          return Object.values(fetchedData).join('').toLowerCase().includes(town.toLowerCase())
          })
          setPendingRecords(filtered);
        }
        // setPendingRecords(apiRecords.data.data);
        setLoading(false);
    };

    const getReviews = async () => {
      setLoading(true);
      const apiReviews = await axios.get("api/data/reviews");
      // let fetchedData = apiReviews.data.data;
      setReviews(apiReviews.data.data);
      setLoading(false);
    }

    const getRecords = async () => {
        setLoading(true);
        const apiRecords = await axios.get("api/data/records");
        let fetchedData = apiRecords.data.data;
        //filtering of records based on town and role of the admin
        if(user?.role != 'Sub Admin'){
          setRecords(apiRecords.data.data);
        }
        else{
          let town = user.town;
          const filtered = fetchedData.filter((fetchedData) => {
          return Object.values(fetchedData).join('').toLowerCase().includes(town.toLowerCase())
          })
          setRecords(filtered);
        }
        // setRecords(apiRecords.data.data);
        setLoading(false);
    };

    const getTowns = async () => {
      const apiRecords = await axios.get("api/data/towns");
      setTowns(apiRecords.data.data);
      setLoading(false);
    };

    const getArchives = async () => {
      setLoading(true);
      const apiRecords = await axios.get("api/data/archives");
      let fetchedData = apiRecords.data.data;
      //filtering of records based on town and role of the admin
       if(user.role == "Super Admin"){
        setArchives(apiRecords.data.data);
      }
      else{
        let town = user.town;
        const filtered = fetchedData.filter((fetchedData) => {
        return Object.values(fetchedData).join('').toLowerCase().includes(town.toLowerCase())
        })
        setArchives(filtered);
      }
      // setArchives(apiRecords.data.data);
      setLoading(false);
      };

      const getArchive = async (id) => {
        setLoading(true);
        const response = await axios.get("api/data/archives/" + id);
        const apiRecords = response.data.data;
        setArchive(apiRecords);
        setFormValues({
          business_name: apiRecords.business_name,
          description: apiRecords.description,
          type: apiRecords.type,
          price_range: apiRecords.price_range,
          operating_from: apiRecords.operating_from,
          operating_to: apiRecords.operating_to,
          open_from: apiRecords.open_from,
          open_to: apiRecords.open_to,
          rating: apiRecords.rating,

          service_options: apiRecords.service_options,
          
          category: apiRecords.category,
          specialties: apiRecords.specialties,
          phone_number_one: apiRecords.phone_number_one,
          phone_number_two: apiRecords.phone_number_two,
          email: apiRecords.email,
          socials: apiRecords.socials,
          cover_image: apiRecords.cover_image,
          image_name: apiRecords.image_name,
          town: apiRecords.town,
          address: apiRecords.address,
          latitude: apiRecords.latitude,
          longitude: apiRecords.longitude,
          date_applied: apiRecords.date_applied,
          date_approved: apiRecords.date_approved,
          date_archived: apiRecords.date_archived
        });
        setTags(apiRecords.specialties.split(','));
        setO(apiRecords.service_options.split(','));
        setLoading(false);
    };

    const openModal = () => {
      const modalEl = document.getElementById("deleteModal");
        modalEl.classList.remove('hidden');
        var backdropEl = document.createElement('div');
        backdropEl.setAttribute('modal-backdrop', '');
        backdropEl.classList.add('bg-zinc-900', 'bg-opacity-80', 'fixed', 'inset-0', 'z-40');
        document.querySelector('body').append(backdropEl);
    };

    const unblockModal = () => {
      const modalEl = document.getElementById("unblockModal");
        modalEl.classList.remove('hidden');
        var backdropEl = document.createElement('div');
        backdropEl.setAttribute('modal-backdrop', '');
        backdropEl.classList.add('bg-zinc-900', 'bg-opacity-50', 'fixed', 'inset-0', 'z-20');
        document.querySelector('body').append(backdropEl);
    };

    const closeunblockModal = () => {
      const modalEl = document.getElementById("unblockModal");

    //   backdropEl.classList.remove('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-20');
      modalEl.classList.add('hidden');
      modalEl.setAttribute('aria-hidden', 'true');
      modalEl.removeAttribute('aria-modal');
      modalEl.removeAttribute('role');
      document.querySelector('[modal-backdrop]').remove();
    
  };

    const closeModal = () => {
        const modalEl = document.getElementById("deleteModal");

      //   backdropEl.classList.remove('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-20');
        modalEl.classList.add('hidden');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.removeAttribute('aria-modal');
        modalEl.removeAttribute('role');
        document.querySelector('[modal-backdrop]').remove();
      
    };

    const getPending = async (id) => {
      setLoading(true);
      const response = await axios.get("api/data/pendings/" + id);
      const apiRecords = response.data.data;
      setPendingRecord(apiRecords);
      setFormValues({
        business_name: apiRecords.business_name,
        description: apiRecords.description,
        type: apiRecords.type,
        price_range: apiRecords.price_range,
        operating_from: apiRecords.operating_from,
        operating_to: apiRecords.operating_to,
        open_from: apiRecords.open_from,
        open_to: apiRecords.open_to,
        rating: apiRecords.rating,
        service_options: apiRecords.service_options,

        category: apiRecords.category,
        specialties: apiRecords.specialties,
        phone_number_one: apiRecords.phone_number_one,
        phone_number_two: apiRecords.phone_number_two,
        email: apiRecords.email,
        socials: apiRecords.socials,
        cover_image: apiRecords.cover_image,
        image_name: apiRecords.image_name,
        town: apiRecords.town,
        address: apiRecords.address,
        latitude: apiRecords.latitude,
        longitude: apiRecords.longitude,
        date_applied: apiRecords.date_applied,
        date_approved: defaultTimeValue
      });
      setTags(apiRecords.specialties.split(','));
      setO(apiRecords.service_options.split(','));
      setLoading(false);
  };

    const getRecord = async (id) => {
      setLoading(true);
      setSpinner(true);
        const response = await axios.get("api/data/records/" + id);
        const apiRecords = response.data.data;
        setRecord(apiRecords);
          setFormValues({
          business_name: apiRecords.business_name,
          description: apiRecords.description,
          type: apiRecords.type,
          price_range: apiRecords.price_range,
          operating_from: apiRecords.operating_from,
          operating_to: apiRecords.operating_to,
          open_from: apiRecords.open_from,
          open_to: apiRecords.open_to,
          rating: apiRecords.rating,
          service_options: apiRecords.service_options,

          category: apiRecords.category,
          specialties: apiRecords.specialties,
          phone_number_one: apiRecords.phone_number_one,
          phone_number_two: apiRecords.phone_number_two,
          email: apiRecords.email,
          socials: apiRecords.socials,
          cover_image: apiRecords.cover_image,
          image_name: apiRecords.image_name,
          town: apiRecords.town,
          address: apiRecords.address,
          latitude: apiRecords.latitude,
          longitude: apiRecords.longitude,
          date_applied: apiRecords.date_applied,
          date_approved: apiRecords.date_approved,
          date_archived: defaultTimeValue
        });
        setTags(apiRecords.specialties.split(','));

        setO(apiRecords.service_options.split(','));
        
        setLoading(false);
        setSpinner(false);
    };

    const storeTown = async (e) => {
      setErrors([]);
      e.preventDefault();
      setTownResult(null)
      try {
        const response = await axios.post("api/data/towns", townFormValues);
        await getTowns();
        setTownResult(response.status);
        closeModal();
        setTownFormValues(initialFormTown);
        closeTownResult();
        console.log(response.status);
      } catch (e) {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      }
    }

    const storeReview = async ({business_name, imagedata, star_rating, comments, author}) => {
      setSpinner(true);
      setErrors([]);
      setReviewResult(null)
      const config = {     
        headers: {
            'Content-Type': 'multipart/form-data'
          }
      }
      try {
        const response = await axios.post("api/data/reviews", {business_name, imagedata, star_rating, comments, author}, config);
        await getReviews();
        navigate(-1);
        setReviewResult(response.status);
        console.log(response.status);
      } catch (e) {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      }
      setSpinner(false);
    }

    const storeRecord = async (e) => {
        e.preventDefault();
        setSpinner(true);
        setErrors([]);
        setResult(null);
        const config = {     
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }
        try {
          const response = await axios.post("api/data/records", formValues, config);
          await getRecords();
          setFormValues(initialForm);
          navigate("dashboard/records");    
          setResult(response.status);
          setTags([]);
          closeResult();
        } catch(e) {
            if (e.response.status === 422) {
              setErrors(e.response.data.errors);
            }
          }
          setSpinner(false);
      };

      const storePending = async (e) => {
        e.preventDefault();
        setSpinner(true);
        setErrors([]);
        setResult(null);
        const config = {     
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }
        try {
          const response = await axios.post("api/data/pendings", formValues, config);
          await getPendings();
          setFormValues(initialForm);
          navigate('success');    
          setResult(response.status);
          setTags([]);
          setO([]);
          // closeResult();
        } catch(e) {
            if (e.response.status === 422) {
              setErrors(e.response.data.errors);
            }
          }
          setSpinner(false);
      };

      const archiveRecord = async (e) => {
        e.preventDefault();
        setSpinner(true);
        try {
          const response = await axios.post("api/data/archives", formValues);
          deleteRecord(record.id);
          getRecords();
          closeModal();
          setFormValues(initialForm);
          navigate("dashboard/records");
          setArchiveResult(response.status);
          closeArchived();
        } catch (e) {
          if (e.response.status === 422) {
            setErrors(e.response.data.errors);
          }
        }
        setSpinner(false);
      };

      const approveRecord = async (e) => {
        e.preventDefault();
        setSpinner(true);
        try {
          const response = await axios.post("api/data/approve", formValues);
          deletePending(pendingRecord.id);
          getRecords();
          setFormValues(initialForm);
          navigate("dashboard/pending-records");
          setResult(response.status);
          closeResult();
        } catch (e) {
          if (e.response.status === 422) {
            setErrors(e.response.data.errors);
          }
        }
        setSpinner(false);
      }

      const unarchiveRecord = async (e) => {
        e.preventDefault();
        setSpinner(true);
        try {
          const response = await axios.post("api/data/unarchive", formValues);
          deleteArchive(archive.id);
          getArchives();
          setFormValues(initialForm);
          navigate("dashboard/archived-records");
          setArchiveResult(response.status);
          closeArchived();
        } catch (e) {
          if (e.response.status === 422) {
            setErrors(e.response.data.errors);
          }
        }
        setSpinner(false);
      };

      const rejectRecord = async (e) => {
        e.preventDefault();
        console.log('reject');
        
      };

      const deleteRecord = async (id) => {
        await axios.delete("api/data/records/" + id);
        getRecords();
      };
    
      const deleteArchive = async (id) => {
        await axios.delete("api/data/archives/" + id);
        getArchives();
      };

      const deletePending = async (id) => {
        await axios.delete("api/data/pendings/" + id);
        getPendings();
      };

      const deleteReview = async (id) => {
        await axios.delete("api/data/reviews/" + id);
        getReviews();
      };

      const updateRecord = async (e) => {
        e.preventDefault();
        setSpinner(true);
        const config = {     
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }
        try {
            if(!formValues['imagedata']){
              const response = await axios.put("api/data/records/" + record.id, formValues);
              getRecords();
              setFormValues(initialForm);
              navigate("dashboard/records");
              setUpdateResult(response.status);
              closeUpdateResult();
            }else{
              deleteRecord(record.id);
              const response = await axios.post("api/data/records", formValues, config);
              getRecords();
              setFormValues(initialForm);
              navigate("dashboard/records");
              setUpdateResult(response.status);
              closeUpdateResult();
            }
          } catch (e) {
            if (e.response.status === 422) {
              setErrors(e.response.data.errors);
            }
          }
          setSpinner(false);
      };

    //prevent the page from submitting if the enter is clicked
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') e.preventDefault();
      };

    //function that handles the specialties input
    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value;
        if(!value.trim()) return
        setTags([...tags, value]); 
        e.target.value =''
        // let join_tagged = tags.join();
        // setFormValues({ ...formValues, specialties: join_tagged});
    }

    function handleKeyClick(value){
      if(o_options.indexOf(value) > -1){
        const filter = o_options.filter(function (o_options) {
          return o_options !== value;
      
      });
      setO(filter);
      }
      else{
        setO([...o_options, value]); 

      }
  }

    //remove tag
    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    //useEffect to update every tag_add 
    useEffect(() => setFormValues(
      formValues => (
        {...formValues, specialties: tags.join()}
      )
    ), [tags]);

    useEffect(() => setFormValues(
      formValues => (
        {...formValues, service_options: o_options.join()}
      )
    ), [o_options]);

    //date and time opoerating
    
    const handleFrom = (e) => {
        let time = e
        const [sHours, minutes] = time.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
        const period = +sHours < 12 ? 'AM' : 'PM';
        const hours = +sHours % 12 || 12;

        let from = hours + ':' + minutes + ' '+period;
        setFormValues({ ...formValues, operating_from: from});
    }

    const handleTo = (e) => {
        let time = e
        const [sHours, minutes] = time.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
        const period = +sHours < 12 ? 'AM' : 'PM';
        const hours = +sHours % 12 || 12;
        let to = hours + ':' + minutes + ' '+period;
        setFormValues({ ...formValues, operating_to: to});
    }

    return <RecordsContext.Provider value={{
      record, 
      records, 
      townResult, 
      clearFormValues, 
      setFormValues,
      unarchiveRecord, 
      getRecord, 
      getRecords, 
      getPendings,
      spinner, 
      pendingRecords, 
      pendingRecord, 
      getPending, 
      getTowns, 
      towns, 
      storeTown, 
      townFormValues, 
      onChangeTown, 
      onChange, 
      formValues, 
      storeRecord, 
      errors, 
      setErrors, 
      result, 
      closeResult, 
      closeResultFast, 
      updateRecord, 
      updateResult, 
      closeUpdateResultFast, 
      getArchives, 
      archives, 
      getArchive, 
      archive, 
      loading, 
      setLoading, 
      archiveRecord, 
      openModal, 
      closeModal, 
      archiveResult, 
      closeArchivedFast, 
      closeTownFast,
      tags,
      setTags,
      o_options,
      setO,
      handleKeyClick,
      handleKeyDown,
      removeTag,
      checkKeyDown,
      approveRecord,
      deletePending,
      rejectRecord,
      closeDelResultFast,
      delResult,
      unblockModal,
      closeunblockModal,
      setRecords,
      handleFrom,
      handleTo,
      reviews,
      getReviews,
      newTo,
      newFrom,
      onChangeReview,
      reviewValues,
      setReviewValues,
      initialReviewForm,
      reviewResult,
      storeReview,
      storePending,
      deleteReview
    }}>{children}</RecordsContext.Provider>
};

export default RecordsContext;