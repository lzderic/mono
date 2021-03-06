import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { id } from "../../../../common/utils/Utils";
import CancelButton from '../../../../components/cancelButton/CancelButton';

const UpdateVehicleMake = ({ store }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: store.getCurrentItem(id()).Title,
      abrv: store.getCurrentItem(id()).Abrv,
    }
  });

  let history = useHistory();

  return (
    <main className="container font-text">
      <h2 className="title">Update vehicle make</h2>
      <form className="form" onSubmit={handleSubmit((data) => store.onUpdateMakeSubmit(id(), data, history))}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"  {...register("title", { required: true, minLength: 1 })} />
        {errors.title && errors.title.type === "required" && <span className="form-error">Cant be empty</span>}
        <label htmlFor="abrv">Abrv: </label>
        <input type="text" id="abrv" name="abrv"  {...register("abrv", { required: true, minLength: 1 })} />
        {errors.abrv && errors.abrv.type === "required" && <span className="form-error">Cant be empty</span>}
        <input className="button button--primary button--form" type="submit" value="Update" />
      </form>
      <CancelButton link={"/make"} />
    </main>
  );
};

export default observer(UpdateVehicleMake);