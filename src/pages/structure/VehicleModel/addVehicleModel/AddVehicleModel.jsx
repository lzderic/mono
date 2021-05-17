import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import CancelButton from '../../../../components/cancelButton/CancelButton';
import { onAddModelSubmit } from '../../../../common/utils/Utils';

const AddVehicleModel = ({ service, store, makeService }) => {
  let history = useHistory();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      abrv: makeService.VehicleMake[0].Abrv
    }
    }); 

  return (
    <main className="container font-text">
      <h2 className="title">Add vehicle make</h2>
      <form className="form" onSubmit={handleSubmit((data) => onAddModelSubmit(data, service, history))}>
      <label htmlFor="name">Select vehicle make: </label>
        <select {...register("vehicleMake")} onChange={e => setValue("abrv", e.target.value)}>
          {makeService.VehicleMake.map((option) => (
            <option key={option.Id} value={option.Abrv}>{option.Title}</option>
          ))}
        </select>
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
