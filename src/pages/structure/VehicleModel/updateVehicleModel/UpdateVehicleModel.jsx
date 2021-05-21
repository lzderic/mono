import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { id } from "../../../../common/utils/Utils";
import CancelButton from '../../../../components/cancelButton/CancelButton';

const UpdateVehicleModel = ({ store }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      vehicleMake: store.value(id()).Abrv,
      name: store.value(id()).Name,
      abrv: store.value(id()).Abrv,
    }
    });

    let history = useHistory();

  return (
    <main className="container font-text">
      <h2 className="title">Update vehicle model</h2>
      <form className="form" onSubmit={handleSubmit((data) => store.onUpdateModelSubmit(data, store.RootStore.ModelService, id(), history))}>
      <select {...register("vehicleMake")} onChange={e => setValue("abrv", e.target.value)} >
          {store.RootStore.MakeService.VehicleMake.map((option) => (
            <option key={option.Id} value={option.Abrv}>{option.Title}</option>
          ))}
        </select>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" {...register("name", { required: true, minLength: 1 })} />
        {errors.name && errors.name.type === "required" && <span className="form-error">Cant be empty</span>}
        <label htmlFor="abrv">Abrv: </label>
        <input type="text" id="abrv" name="abrv" {...register("abrv", { required: true, minLength: 1 })} />
        {errors.abrv && errors.abrv.type === "required" && <span className="form-error">Cant be empty</span>}
        <input className="button button--primary button--form" type="submit" value="Update" />
      </form>
      <CancelButton link={"/model"} />
    </main>
  );
};

export default observer(UpdateVehicleModel);
