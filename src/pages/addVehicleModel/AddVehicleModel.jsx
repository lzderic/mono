import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import CancelButton from '../../components/cancelButton/CancelButton';

const AddVehicleModel = ({ store }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useHistory();

  const onSubmit = (data) => {
    const Name = data.name;
    const Abrv = data.abrv;
    const Id = Date.now();
    store.createVehicleModel({Id, Name, Abrv});
    history.push("/model");
  };


  return (
    <main className="container font-text">
      <h2 className="title">Add vehicle make</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name"  {...register("name", { required: true, minLength: 1 })} />
        {errors.name && errors.name.type === "required" && <span className="form-error">Cant be empty</span>}
        <label htmlFor="abrv">Abrv: </label>
        <input type="text" id="abrv" name="abrv" {...register("abrv", { required: true, minLength: 1 })} />
        {errors.abrv && errors.abrv.type === "required" && <span className="form-error">Cant be empty</span>}
        <input className="button button--primary button--form" type="submit" value="Add vehicle" />
      </form>
      <CancelButton link={"/model"} />
    </main>
  );
};

export default observer(AddVehicleModel);
