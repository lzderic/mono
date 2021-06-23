class MakeService {
   
  // Create VehicleMake
  async addItem(id, Title, Abrv) {
      await fetch('http://localhost:8000/VehicleMake', {
          method: 'POST',
            body: JSON.stringify({
              id,
              Title,
              Abrv
            }),
            headers: {
              'Content-Type': 'application/json',
          },
      })
         .then( (response) => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(response);
         })
         .then( (dat) => {
            console.log(dat);
         }).catch((error) => {
            console.warn('Something went wrong.', error);
         });
    }

    // Delete VehicleMake
    async deleteItem(id) {
      await fetch('http://localhost:8000/VehicleMake/' + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(res => res.text()) 
      .then(res => console.log(res))
    }

    // Update VehicleMake
    async editItem(id, Title, Abrv) {
      await fetch('http://localhost:8000/VehicleMake/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          Title,
          Abrv
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
         .then( (response) => {
             if (response.ok) {
                 return response.json();
             }
             return Promise.reject(response);
         })
         .then( (dat) => {
             console.log(dat);
         }).catch((error) => {
             console.warn('Something went wrong.', error);
         });
    }
    
    
    constructor(RootStore) {
        this.RootStore = RootStore;
    }
}

export default MakeService;
