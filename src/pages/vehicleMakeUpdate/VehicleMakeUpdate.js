import React from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';

const VehicleMakeUpdate = ({ store }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data.title);
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[pathArray.length -1];
        console.log(id);
        //store.updateVehicleMake(id, vehicle);
    };

    return(
        <main className="container font-text">
            <h2 className="title">Update vehicle make</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" {...register("title")} />
                <label htmlFor="abrv">Abrv:</label>
                <input type="text" id="abrv" name="abrv" {...register("abrv")} />
                <input type="submit" value="Submit"></input>
            </form>
        </main>
    );
}

export default observer(VehicleMakeUpdate);