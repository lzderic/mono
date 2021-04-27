import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { getIdFromUrl } from "../../../../common/utils/Utils";
import CancelButton from '../../../../components/cancelButton/CancelButton';

const UpdateVehicleModel = ({ service }) => {
  // Id from URL
  const id = getIdFromUrl();
  // Values of current vehicle
  const value = service.getCurrentItem(id);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: value.Name,
      abrv: value.Abrv,
    }
    });

  let history = useHistory();
  
  // On submit update vehicle
  const onSubmit = (data) => {
    service.editItem(id, { data });
    history.push("/model");
  };

  return (
    <main className="container font-text">
      <h2 className="title">Update vehicle model</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
