import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { getIdFromUrl } from "../../common/utils/Utils";
import CancelButton from '../../components/cancelButton/CancelButton';

const UpdateVehicleMake = ({ store }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useHistory();

  const id = getIdFromUrl();
  const value = store.getCurrentVehicle(id);

  // On submit update vehicle
  const onSubmit = (data) => {
    store.updateVehicleMake(id, { data });
    history.push("/make");
  };

  return (
    <main className="container font-text">
      <h2 className="title">Update vehicle make</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" placeholder={value.Title} {...register("title", { required: true, minLength: 1 })} />
        {errors.title && errors.title.type === "required" && <span className="form-error">Cant be empty</span>}
        <label htmlFor="abrv">Abrv: </label>
        <input type="text" id="abrv" name="abrv" placeholder={value.Abrv} {...register("abrv", { required: true, minLength: 1 })} />
        {errors.abrv && errors.abrv.type === "required" && <span className="form-error">Cant be empty</span>}
        <input className="button button--primary button--form" type="submit" value="Update" />
      </form>
      <CancelButton link={"/make"} />
    </main>
  );
};

export default observer(UpdateVehicleMake);
