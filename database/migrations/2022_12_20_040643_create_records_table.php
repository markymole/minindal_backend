<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->text('description')->nullable();
            $table->string('specialties')->nullable();
            $table->string('category')->nullable(); // other general categories
            $table->json('open')->nullable(); 
            $table->json('operating_hours')->nullable(); // Refactor operating_from and operating_to
            $table->json('coordinates')->nullable(); // Refactor latitude and longitude
            $table->decimal('rating', 3, 2)->nullable();
            $table->string('phone_numbers')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('image_name')->nullable();
            $table->string('town')->nullable();
            $table->string('address')->nullable();
            $table->date('date_applied')->nullable();
            $table->date('date_approved')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
};
