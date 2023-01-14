const{localStorage}=window;
      const new_player_list=team_list.map(row =>{

           return{
            id:row.id,
            image:row.image,
            position:row.position,
            name:row.name,
            number:row.number
           }
        });
        let card_item='';
        let all_team=document.getElementsByClassName('all_team');
        for(let player of new_player_list){
            card_item+=`<div class="card col-lg-3 col-md-6 col-sm-6 col-12" style="width: 18rem;">
            <img class="card-img-top" src="${player.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${player.name}</h5>
              <p class="card-text">${player.position}</p>
              <span class="number-player">${player.number}</span>
            </div>
        </div>`
        }
        all_team[0].innerHTML=card_item;
        let position_data=[
            {position:"Kaleci"},
            {position:"Defans"},
            {position:"Ortasaha"},
            {position:"Forvet"}
        ]
        let position_select=document.querySelector('#position_select');
        
        let option=`<option value='' >Secin</option>`;


        for (let row of position_data){
            option+=`<option>${row.position}</option>`;
        }
        position_select.innerHTML=option;

        function getValue(current_input){
            const{value}=current_input;
            let card_item2='';
            let find_player_data=team_list.filter(row=>row.position==value);
            for(let player of find_player_data){
                card_item2+=`<div class="card col-lg-3 col-md-6 col-sm-6 col-12" style="width: 18rem;">
                <img class="card-img-top" src="${player.image}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${player.name}</h5>
                  <p class="card-text">${player.position}</p>
                  <span class="number-player">${player.number}</span>
                </div>
            </div>`
                    }
            all_team[0].innerHTML=card_item2;
        }