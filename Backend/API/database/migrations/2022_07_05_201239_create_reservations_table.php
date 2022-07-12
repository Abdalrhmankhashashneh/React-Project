<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->date("date");
            $table->integer("people_count");
            $table->string("message");
            $table->time("time");
            $table->foreignId("user_id")->constrained()->reference ("users")->onDelete("cascade")->onUpdate("cascade");
            $table->foreignId("table_id")->constrained()->reference ("tables")->onDelete("cascade")->onUpdate("cascade");
            $table->foreignId("floor_type_id")->constrained()->reference("floor_types")->onDelete("cascade")->onUpdate("cascade");
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
        Schema::dropIfExists('reservations');
    }
}
