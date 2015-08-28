//Displays both short and medium rangebands as auras
//Macro !rangebands @{target|Target|token_id}

on("chat:message", function(msg) {
    if(msg.type == "api" && msg.content.indexOf("!rangebands") != -1)
    {
        log(msg);   
        var n = msg.content.split(" ", 2);
        var cmd = n[0];
        var id = n[1];

        var token =  getObj("graphic", id);       
        var name;
        
        if (token)
            name = token.get("name");
            
        if (token)
        {
            var oldShowPlayers_Aura1 = token.get("showplayers_aura1");
            sendChat("","oldShowPlayers_Aura1 = "+ oldShowPlayers_Aura1);
            token.set("aura1_radius", "10");
            token.set("aura1_square", false);
            token.set("aura1_color","#FF0000");
            token.set("playersedit_aura1", false);
            token.set("aura2_radius", "30");
            token.set("aura2_square", false);
            token.set("aura2_color","#FFFF00");
            token.set("playersedit_aura2", false);
            token.set("showplayers_aura1", true);
            token.set("showplayers_aura2", true);
            
            if (oldShowPlayers_Aura1)
            {
                token.set("aura1_radius", "0");
                token.set("aura2_radius", "0");
                token.set("showplayers_aura1", false);
                token.set("showplayers_aura2", false);
            }
        }
        else
        {
            sendChat("","Token not found "+ name);
        }        
    }
    
});