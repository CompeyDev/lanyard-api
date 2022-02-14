	var discord_id = "893762371770802227";

    function updateStats() {
                    $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
                        data = data.data;
                        if (data.active_on_discord_web) {
                            $("#spotify").html(`DevComp is using Discord Web.`);
                        }
			if (data.active_on_discord_desktop) {
                            $("#spotify").html(`DevComp is using Discord Desktop.`);
                        }
			if (data.active_on_discord_mobile) {
                            $("#spotify").html(`DevComp is using Discord mobile.`);
                        }
            })
    }
    updateStats();
    setInterval(updateStats, 30000);
