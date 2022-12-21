<script lang="ts" >
    import "../app.css"
</script>

<header class=" sticky top-0 w-full flex justify-between p-2 text-lg backdrop-blur-lg "  >
    <h1 >TheCodeCOO</h1>
    <div class=" flex gap-10" >
        <a href="/posts">
            <h1>Posts</h1>
        </a>
        <a href="/about">
            <h1>About</h1>
        </a>
    </div>
</header>
<slot/>