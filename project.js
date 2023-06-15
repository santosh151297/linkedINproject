let profilemenu=document.getElementById("profilemenu");

        function togglemenu(){
            profilemenu.classList.toggle("open-menu");
        }




        let sideActivity = document.getElementById("sidebarActivity");
        let morelink = document.getElementById("showmorelink");

        function toggleActivity(){
            sideActivity.classList.toggle("open-activity");

        if(sideActivity.classList.contains("open-activity")){

            morelink.innerHTML="Show less <b>-</>";
        }
        else{

            morelink.innerHTML="Show more <b>+</>";

        }
    }