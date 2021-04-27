import React from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { getIdFromUrl } from "../../../../common/utils/Utils";
import CancelButton from '../../../../components/cancelButton/CancelButton';

const UpdateVehicleMake = ({ service }) => {
  // Id from Url
  const id = getIdFromUrl();
  // Values from current object
  const value = service.getCurrentItem(id);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: value.Title,
      abrv: value.Abrv,
    }
  });

  let history = useHistory();
  
  // On submit update vehicle
  const onSubmit = (data) => {
    service.editItem(id, { data });
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
        <input type="text" id="abrv" name="abrv"  {...register("abrv", { required: true, minLength: 1 })} />
        {errors.abrv && errors.abrv.type === "required" && <span className="form-error">Cant be empty</span>}
        <input className="button button--primary button--form" type="submit" value="Update" />
      </form>
      <CancelButton link={"/make"} />
    </main>
  );
};

export default observer(UpdateVehicleMake);
