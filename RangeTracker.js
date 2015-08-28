// Computes the distances between 2 tokens by ID
// Use the macro target picker to fill in the ID
// Displays range as per range bands for Fantasy Flight Games Star Wars systems
// Script command
// !rangep @{target|1st Target|token_id} and @{target|2nd Target|token_id} 

on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!rangep") != -1)
    {

        //log(msg);   
		
		var chatText='';
		
        var n = msg.content.split(" ", 4)
        var cmd = n[0];
        var id1 = n[1];
        var id2 = n[3];

        var token1 =  getObj("graphic", id1);    
        var token2 =  getObj("graphic", id2);    
        var name1;
        var name2;
        
        var range;
        
        if (token1)
            name1 = token1.get("name");
        if (token2)
            name2 = token2.get("name");
        if (token1 && token2)
        {
            var gridSize = 70;
            var lDist = Math.abs(token1.get("left")-token2.get("left"))/gridSize;
            var tDist = Math.abs(token1.get("top")-token2.get("top"))/gridSize;
            var dist = 0;
            if (tDist == lDist)
            {
                dist = tDist;
            }
            else if (tDist > lDist)
            {
                dist = lDist+(tDist-lDist);
            }
            else
            {
                dist = tDist+(lDist-tDist);
            }
            dist = dist;
            
            if (dist < 1)
            {
                range = "Corps à corps";
            }
            else if (dist < 5)
            {
                range = "Courte";
            }
            else if (dist < 10)
            {
                range = "Moyenne";
            }
            else if (dist < 16)
            {
                range = "Longue";
            }
            else if (dist >25)
            {
                range = "Extrème";
            }
			
			chatText = chatText + '<table style="border:2px solid black; border-collapse:collapse; width:100%;">';
			chatText = chatText + '<tr><td style="border-bottom:2px solid black; text-align:center; background-color:black; color:white; font-weight:bold;">Distance</td></tr>';
			chatText = chatText + '<tr><td style=" text-align:center;">' + range + '</td></tr>';
			chatText = chatText + '</table>';
						
			sendChat('', chatText);
			
        }
        else
        {
            if (!token1)
            {
				chatText = chatText + '<table style="border:2px solid black; border-collapse:collapse; width:100%;">';
				chatText = chatText + '<tr><td style="border-bottom:2px solid black; text-align:center; background-color:black; color:white; font-weight:bold;">Token non trouvé</td></tr>';
				chatText = chatText + '<tr><td style=" text-align:center;">' + name1 + '</td></tr>';
				chatText = chatText + '</table>';
			
				sendChat('', chatText);
                
            }
            if (!token2)
            {
				
				chatText = chatText + '<table style="border:2px solid black; border-collapse:collapse; width:100%;">';
				chatText = chatText + '<tr><td style="border-bottom:2px solid black; text-align:center; background-color:black; color:white; font-weight:bold;">Token non trouvé</td></tr>';
				chatText = chatText + '<tr><td style=" text-align:center;">' + name2 + '</td></tr>';
				chatText = chatText + '</table>';
				
				sendChat('', chatText);
                
            }
        }        
    }
    
});