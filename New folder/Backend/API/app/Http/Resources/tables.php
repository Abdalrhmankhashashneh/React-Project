<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class tables extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'people_count' => $this->people_count,
            'floor_type_id' => $this->floor_type_id,
            'price' => $this->price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

        return parent::toArray($request);
    }
}
