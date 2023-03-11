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
            $table->text('description');
            //authentic or modern kapampangan
            $table->string('type');
            //pastries, exotic, etc
            $table->string('category');
            $table->text('specialties');
            $table->string('price_range');
            $table->string('operating_from');
            $table->string('operating_to');
            $table->string('open_from');
            $table->string('open_to');
            $table->decimal('rating');
            //wheter it is only for dine in, take-out, delivery, order
            $table->string('service_options');
            $table->string('phone_number_one')->nullable();
            $table->string('phone_number_two')->nullable();
            $table->string('email')->nullable();
            $table->string('socials')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('image_name')->nullable();
            $table->string('town');
            $table->text('address');
            $table->decimal('latitude', 23, 15);
            $table->decimal('longitude', 23, 15);
            $table->date('date_applied')->nullable();
            $table->date('date_approved')->nullable();
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
