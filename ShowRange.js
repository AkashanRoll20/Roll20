on("chat:message", function(msg) {
	
	//Displays the short range band as an aura
	//Macro !shortband @{target|Target|token_id}
    if(msg.type == "api" && msg.content.indexOf("!shortband") != -1)
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
            var oldShowPlayers_Aura2 = token.get("showplayers_aura2");
            token.set("aura1_radius", "0");
            token.set("showplayers_aura1",false);
            token.set("aura2_radius", "5");
            token.set("aura2_square", false);
            token.set("aura2_color","#660066");
            token.set("playersedit_aura2", false);
            token.set("showplayers_aura2", true);
            
            if (oldShowPlayers_Aura2)
            {
                token.set("aura1_radius", "0");
                token.set("showplayers_aura2", false);
            }
        }
        else
        {
            sendChat("","Token not found "+ name);
        }        
    }
	
	//Displays the medium range band as an aura
	//Macro !mediumband @{target|Target|token_id}

	if(msg.type == "api" && msg.content.indexOf("!mediumband") != -1)
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
            var oldShowPlayers_Aura2 = token.get("showplayers_aura2");
            token.set("aura1_radius", "0");
            token.set("showplayers_aura1", false);
            token.set("aura2_radius", "10");
            token.set("aura2_square", false);
            token.set("aura2_color","#FF8000");
            token.set("playersedit_aura2", false);
            token.set("showplayers_aura2", true);
            
            if (oldShowPlayers_Aura2)
            {
                token.set("aura2_radius", "0");
                token.set("showplayers_aura2", false);
            }
        }
        else
        {
            sendChat("","Token not found "+ name);
        }        
    }
	
	//Displays the long range band as an aura
	//Macro !longband @{target|Target|token_id}

	if(msg.type == "api" && msg.content.indexOf("!longband") != -1)
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
            var oldShowPlayers_Aura2 = token.get("showplayers_aura2");
            token.set("aura1_radius", "0");
            token.set("showplayers_aura1", false);
            token.set("aura2_radius", "16");
            token.set("aura2_square", false);
            token.set("aura2_color","#F4FA58");
            token.set("playersedit_aura2", false);
            token.set("showplayers_aura2", true);
            
            if (oldShowPlayers_Aura2)
            {
                token.set("aura2_radius", "0");
                token.set("showplayers_aura2", false);
            }
        }
        else
        {
            sendChat("","Token not found "+ name);
        }        
    }
	
	//Displays the extrem range band as an aura
	//Macro !extremband @{target|Target|token_id}

	if(msg.type == "api" && msg.content.indexOf("!extremband") != -1)
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
            var oldShowPlayers_Aura2 = token.get("showplayers_aura2");
            token.set("aura1_radius", "0");
            token.set("showplayers_aura1", false);
            token.set("aura2_radius", "25");
            token.set("aura2_square", false);
            token.set("aura2_color","#ECF6CE");
            token.set("playersedit_aura2", false);
            token.set("showplayers_aura2", true);
            
            if (oldShowPlayers_Aura2)
            {
                token.set("aura2_radius", "0");
                token.set("showplayers_aura2", false);
            }
        }
        else
        {
            sendChat("","Token not found "+ name);
        }        
    }
	
	//Displays both short and medium rangebands as auras
	//Macro !rangebands @{target|Target|token_id}

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
            token.set("aura1_radius", "5");
            token.set("aura1_square", false);
            token.set("aura1_color","#FF0000");
            token.set("playersedit_aura1", false);
            token.set("aura2_radius", "10");
            token.set("aura2_square", false);
            token.set("aura2_color","#FF8000");
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