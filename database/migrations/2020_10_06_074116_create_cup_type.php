<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCupType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cup_type', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cupTypeName');
            $table->integer('inputCupOnlinePrice');
            $table->double('cupTypePrice');
            $table->string('status');
            $table->string('remove')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cup_type');
    }
}
