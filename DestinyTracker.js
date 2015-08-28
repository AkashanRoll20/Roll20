//Tracks light side and dark side destiny tokens
// !destiny status (checks the status of the destiny tokens)
// !destiny reset (resets the tracker to 0)
// !destiny adddark (adds a dark side point)
// !destiny addlight (adds a light side point)
// !destiny usedark (spends one dark side point and adds one to light side)
// !destiny uselight (spends one light side point and adds one to dark side)

var lightImg='<img src="https://s3.amazonaws.com/files.d20.io/images/11826352/8JI8IfHDqKEMmJ5pLzgO8g/thumb.png?1440604023" width="50" alt="Light" />';
var lightDark='<img src="https://s3.amazonaws.com/files.d20.io/images/11826351/fqTn02nKewaCKc3CKYsWnA/thumb.png?1440604021" width="50" alt="Dark" />';

state.destinylight = 0;
state.destinydark = 0;
on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!destiny") != -1)
    {
		var chatText='';
		
		function GetFinalText(title,message){
			
			chatText = chatText + '<table style="border:1px solid black; border-collapse:collapse; width:100%; padding:2px;">';
			chatText = chatText + '<tr>';
			chatText = chatText + '<td style="font-weight:bold;text-align:center;background-color:black;color:white; padding:2px;">'+title+'</td>';
			chatText = chatText + '</tr>';
			
			chatText = chatText + '<tr><td>';
			for (i = 0; i < state.destinylight; i++) { 
				chatText = chatText + lightImg;
			}
			chatText = chatText + '</td></tr>';
			chatText = chatText + '<tr><td>';
			for (i = 0; i < state.destinydark; i++) { 
				chatText = chatText + lightDark;
			}
			chatText = chatText + '</td></tr>';
			
			if(message){
				chatText = chatText + '<tr><td style="border-top:border:1px solid black;text-align:center;background-color:darkred;color:white; padding:2px;">'+message+'</td></tr>';
			}

			chatText = chatText + '</table>';
		}
		
        //log(msg);   
		
        var n = msg.content.split(" ", 2);
        var cmd = n[1];
		
        if(cmd == "status" || cmd == "s")
        {	
			GetFinalText("Statut des points de Destin");					
            //sendChat("",chatText);
        }
        if(cmd == "addlight" || cmd == "al")
        {
            state.destinylight = state.destinylight + 1;
			
			GetFinalText("Ajout d'un point Lumineux");
            //sendChat("",chatText);
        }
        if(cmd == "adddark" || cmd == "ad")
        {
            state.destinydark = state.destinydark + 1;
			
			GetFinalText("Ajout d'un point Obscure");
            //sendChat("",chatText);
        }
        if(cmd == "uselight" || cmd == "spendlight" || cmd == "ul")
        {
            if(state.destinylight >= 1)
            {
                state.destinylight = state.destinylight - 1;
                state.destinydark = state.destinydark + 1;
				
				GetFinalText("Used Light Destiny Point");
				//sendChat("",chatText);
            }
            else
            {
                GetFinalText("Use Light Destiny Point","No light destiny points available!");
				//sendChat("",chatText);
            }
        }
        if(cmd == "usedark" || cmd == "spenddark" || cmd == "ud")
        {
            if(state.destinydark >= 1)
            {
                state.destinylight = state.destinylight + 1;
                state.destinydark = state.destinydark - 1;
				
				GetFinalText("Used Dark Destiny Point");
				//sendChat("",chatText);
            }
            else
            {
				GetFinalText("Use Dark Destiny Point","No dark destiny points available!");
				//sendChat("",chatText);
            }
        }
        if(cmd == "reset" || cmd == "r")
        {
            state.destinylight = 0;
            state.destinydark = 0;
			
			GetFinalText("Destiny Points Reset!");
			//sendChat("",chatText);
        }
		
        sendChat("",chatText);
    }
});