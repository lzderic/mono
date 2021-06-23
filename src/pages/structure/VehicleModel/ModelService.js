import { makeAutoObservable } from 'mobx';

class ModelService {

  // Create VehicleModel
  async addItem(id, MakeId, Name, Abrv) {
    await fetch('http://localhost:8000/VehicleModel', {
      method: 'POST',
      body: JSON.stringify({
        id,
        MakeId,
        Name,
        Abrv
      }),
      headers: {
      'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then( (dat) => {
        console.log(dat);
      })
      .catch((error) => {
        console.warn('Something went wrong.', error);
      });
  }
    
  // Delete VehicleModel
  async deleteItem(id) {
    await fetch('http://localhost:8000/VehicleModel/' + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
  }

  // Update VehicleModel
  async editItem(id, MakeId, Name, Abrv) {
    await fetch('http://localhost:8000/VehicleModel/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        MakeId,
        Name,
        Abrv
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
        .then((dat) => {
         console.log(dat);
     })
      .catch((error) => {
        console.warn('Something went wrong.', error);
     });
  }
    
  constructor(RootStore) {
    this.RootStore = RootStore;
    makeAutoObservable(this);
  }
}

export default ModelService;

