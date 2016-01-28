Ext.define('Sin.BusStation',{
    extend:'Ext.Container',
    config:{
        name:'name',
        status:'next',//pass,in,next
        index:0,
        layout:{
            type:'hbox',
        },
    },
    constructor:function(index){
        this.callParent(arguments);
        this.indictor=Ext.create('Ext.Container',{html:"<canvas id='canv"+this.getIndex()+"' width='20' height='20'></canvas>"});
        this.add(this.indictor);
        this.stlable=Ext.create('Ext.Label',{html:this.getName(),maxHeight:'20px'});
        this.add(this.stlable);
        /*
        if(this.getStatus()=='next'){
            this.stlable.element.setStyle("background-color","blue");
        }else if(this.getStatus()=='in'){
            this.stlable.element.setStyle("background-color","yellow");
        }else{
            this.stlable.element.setStyle("background-color","red");
        }
        */
    },
    showstatus:function(){
        var context = this.ctx;
        var cw = this.canvas.width;
        var ch = this.canvas.height;

        console.log(cw,ch);
        context.lineWidth = 2;
        context.strokeStyle = 'red';

        context.moveTo(cw/2,0);
        context.lineTo(cw/2,ch);
        context.stroke();

        context.fillStyle="#00FF00";
        context.beginPath();
        context.arc(cw/2,ch/2,5,0,Math.PI*2,true);
        context.closePath();
        context.fill();

    },
});


Ext.define('Sin.RunningBus', {
    config:{
        mainid:'aaaa',
    },
    constructor:function(mainid){
        this.main=Ext.ComponentQuery.query(mainid)[0];
        if(!this.main){
            alert("Err , "+mainid+" not found");
        }
        this.stations=new Array();
    },
    add:function(station){
        var s=Ext.create('Sin.BusStation',station);
        this.main.add(s);
        this.stations.push(s);
        s.canvas = document.getElementById('canv'+station.index);
        s.ctx=s.canvas.getContext("2d");
        s.showstatus();
    },
});


