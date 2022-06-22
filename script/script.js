const app = Vue.createApp({
    data() {
        return {
            profile: "profile5.jpg",
            nickname: "",
            list:[],
            year:"2021",
            month:"04",
            monthList1:[
                {"label":"4. Apr", "value":"04"},
                {"label":"5. May", "value":"05"},
                {"label":"6. Jun", "value":"06"},
                {"label":"7. Jul", "value":"07"},
                {"label":"8. Aug", "value":"08"},
                {"label":"9. Sep", "value":"09"},
                {"label":"10. Oct", "value":"10"},
                {"label":"11. Nov", "value":"11"},
                {"label":"12. Dec", "value":"12"}
            ],
            monthList2:[
                {label:"1. Jan", value:"01"},
                {label:"2. Feb", value:"02"},
                {label:"3. Mar", value:"03"},
                {label:"4. Apr", value:"04"}
            ],
            dayList2104: [
                {label:"15", value:"15"},
                {label:"18", value:"18"},
                {label:"21", value:"21"},
                {label:"24", value:"24"},
                {label:"26", value:"26"},
                {label:"28", value:"28"},
                {label:"30", value:"30"}
            ],
            dayList2105: [
                {label:"2", value:"02"},
                {label:"5", value:"05"},
                {label:"7", value:"07"},
                {label:"8", value:"08"},
                {label:"14", value:"14"},
                {label:"18", value:"18"},
                {label:"19", value:"19"},
                {label:"20", value:"20"},
                {label:"28", value:"28"},
                {label:"29", value:"29"}
            ],
            dayList2106: [
                {label:"1", value:"01"},
                {label:"2", value:"02"},
                {label:"7", value:"07"},
                {label:"17", value:"17"},
                {label:"21", value:"21"},
                {label:"22", value:"22"},
                {label:"28", value:"28"},
                {label:"29", value:"29"}
            ],
            dayList2107: [
                {label:"1", value:"01"},
                {label:"12", value:"12"},
                {label:"17", value:"17"},
                {label:"19", value:"19"},
                {label:"22", value:"22"},
                {label:"25", value:"25"}
            ],
            dayList2108: [
                {label:"2", value:"02"},
                {label:"9", value:"09"},
                {label:"10", value:"10"},
                {label:"16", value:"16"},
                {label:"18", value:"18"},
                {label:"21", value:"21"},
                {label:"23", value:"23"},
                {label:"26", value:"26"}
            ],
            dayList2109: [
                {label:"1", value:"01"},
                {label:"7", value:"07"},
                {label:"8", value:"08"},
                {label:"10", value:"10"},
                {label:"13", value:"13"},
                {label:"15", value:"15"},
                {label:"16", value:"16"},
                {label:"18", value:"18"},
                {label:"19", value:"19"},
                {label:"22", value:"22"},
                {label:"25", value:"25"},
                {label:"27", value:"27"},
                {label:"30", value:"30"}
            ],
            dayList2110: [
                {label:"4", value:"04"},
                {label:"9", value:"09"},
                {label:"11", value:"11"},
                {label:"14", value:"14"},
                {label:"17", value:"17"},
                {label:"19", value:"19"},
                {label:"20", value:"20"},
                {label:"23", value:"23"},
                {label:"25", value:"25"},
                {label:"27", value:"27"},
                {label:"28", value:"28"},
                {label:"30", value:"30"},
                {label:"31", value:"31"}
            ],
            dayList2111: [
                {label:"2", value:"02"},
                {label:"5", value:"05"},
                {label:"9", value:"09"},
                {label:"10", value:"10"},
                {label:"12", value:"12"},
                {label:"14", value:"14"},
                {label:"17", value:"17"},
                {label:"18", value:"18"},
                {label:"21", value:"21"},
                {label:"23", value:"23"},
                {label:"25", value:"25"},
                {label:"26", value:"26"},
                {label:"29", value:"29"},
                {label:"30", value:"30"}
            ],
            dayList2112: [
                {label:"2", value:"02"},
                {label:"8", value:"08"},
                {label:"9", value:"09"},
                {label:"15", value:"15"},
                {label:"19", value:"19"},
                {label:"21", value:"21"},
                {label:"22", value:"22"},
                {label:"23", value:"23"},
                {label:"27", value:"27"},
                {label:"28", value:"28"},
                {label:"30", value:"30"}
            ],
            dayList2201: [
                {label:"3", value:"03"},
                {label:"4", value:"04"},
                {label:"6", value:"06"},
                {label:"8", value:"08"},
                {label:"11", value:"11"},
                {label:"17", value:"17"},
                {label:"18", value:"18"},
                {label:"20", value:"20"},
                {label:"24", value:"24"},
                {label:"26", value:"26"}
            ],
            dayList2202: [
                {label:"2", value:"02"},
                {label:"5", value:"05"},
                {label:"9", value:"09"},
                {label:"10", value:"10"},
                {label:"11", value:"11"},
                {label:"12", value:"12"},
                {label:"14", value:"14"},
                {label:"16", value:"16"},
                {label:"18", value:"18"},
                {label:"19", value:"19"},
                {label:"24", value:"24"},
                {label:"28", value:"28"}
            ],
            dayList2203: [
                {label:"2", value:"02"},
                {label:"4", value:"04"},
                {label:"6", value:"06"},
                {label:"7", value:"07"},
                {label:"8", value:"08"},
                {label:"9", value:"09"},
                {label:"11", value:"11"},
                {label:"17", value:"17"},
                {label:"23", value:"23"},
                {label:"24", value:"24"},
                {label:"26", value:"26"},
                {label:"28", value:"28"},
                {label:"30", value:"30"}
            ],
            dayList2204: [
                {label:"1", value:"01"},
                {label:"4", value:"04"},
                {label:"9", value:"09"},
                {label:"10", value:"10"},
                {label:"12", value:"12"},
                {label:"13", value:"13"},
                {label:"15", value:"15"},
                {label:"18", value:"18"},
                {label:"25", value:"25"}
            ]
        }
    },
    methods: {
        setNick(e) {
            e.preventDefault();
            if (!this.nickname) {
                alert('Set your name');
                return;
            } else {
                let msg = this.list;

                for(let i=0; i<msg.length; i++){
                  for(let j=0; j<msg[i].talk.length; j++) {
                      let text = msg[i].talk[j].text;
                      if (text) {
                          text = text.replace("@@", this.nickname);
                          msg[i].talk[j].text = text;
                      }
                  }
                }
                
                let nick = document.querySelector('input[name="nick"]');
                let btn = document.querySelector('.send');
                nick.disabled = true;
                btn.disabled = true;
            }
        },
        setImg(value) {
            let profile = value.concat('.jpg');
            this.profile = profile;
        },
        inputNick(e) {
            this.nickname = e.target.value;
        }
    },
    mounted(){
        axios.get("./db.json")
            .then(response => (this.list = response.data));
    }
});

app.mount('#app');
