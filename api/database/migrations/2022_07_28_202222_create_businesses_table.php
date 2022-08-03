<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('owner_name');
            $table->string('owner_email')->unique();
            $table->string('description',400);
            $table->string('password');
            $table->string('address');
            $table->string('credential_photo');
            $table->string('profile_photo');
            $table->tinyInteger('business_status')->default(0);
            $table->unsignedBigInteger('catrgory_id');

            $table->foreign('catrgory_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('businesses');
    }
}
