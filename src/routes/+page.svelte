<script lang="ts" >
	import { browser } from "$app/environment";
    import { onMount } from "svelte";
    let randomizedText: string
    const values = ["developer", "designer", "meme enjoyer"]
    let index = 0
    setInterval(()=>{
        randomizedText=values[index]
        index++
        if(index==3){
            index=0
        }
    }, 1500)
    // onMount(()=>{
    //     if (browser){
    //         if (!localStorage.getItem("subbed")){
    //             window.location.href="/subscribe"
    //         }
    //     }
    // })
</script>

<header class=" flex justify-between items-center p-3 h-24 backdrop-blur-md sticky top-0 border-b-2" >
    <h1 class=" font-bold " >TheCodeCoo</h1>
    <a href="/posts" class=" hover:underline">
        <h1>Posts</h1>
    </a>
    <a href="#sub" class=" hover:underline">
        <h1>Subscribe</h1>
    </a>
</header>
<main class=" h-screen mt-20 px-3">
    <h1 class=" text-3xl font-bold">Coocoo visitor :) </h1>
    <h1 class=" text-xl">Are you a <h1 class=" inline " >{randomizedText}</h1> ?</h1>
    <h1 class=" text-xl">Are you interested in <h1 class=" inline " >{randomizedText}</h1> ?</h1>
    <h1 class=" text-xl">Are you interested in <h1 class=" inline " >{randomizedText}</h1> ?</h1>
</main>