import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const UpdateVehicleMake = ({ store }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useHistory();

  // const currentVehicle = (id) => {
  //   const index = store.VehicleMake.findIndex(
  //       (vehicle) => vehicle.Id.toString() === id
  //   );
  //   if (index > -1) {
  //       const currObject = store.VehicleMake[index];
  //   }
  //   return store.VehicleMake[index].Title;
  //   }
    
  //   const pathArray = window.location.pathname.split("/");
  //   const id = pathArray[pathArray.length - 1];

  //  value={currentVehicle(id)}  
  //   console.log(currentVehicle(id));

  // On submit update vehicle
  const onSubmit = (data) => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[pathArray.length - 1];
    store.updateVehicleMake(id, { data });
    history.push("/make");
  };

  return (
    <main className="container font-text">
      <h2 className="title">Update vehicle make</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"  {...register("title", { required: true, minLength: 1 })} />
        {errors.title && errors.title.type === "required" && <span className="form-error">Cant be empty</span>}
        <label htmlFor="abrv">Abrv: </label>
        <input type="text" id="abrv" name="abrv" {...register("abrv", { required: true, minLength: 1 })} />
        {errors.abrv && errors.abrv.type === "required" && <span className="form-error">Cant be empty</span>}
        <input className="button button--primary button--form" type="submit" value="Update" />
      </form>
    </main>
  );
};

export default observer(UpdateVehicleMake);
