# middleware

        in express to use middleware --> app.use("middleware")

<h3>Static Middle ware</h3>
       ` app.use(express.static("public"))` --> root route will be '/'--> '/public'
<a>app.use(express.static)</a>

# Template Engine --> [PUG/Ejs/Handlebars]

        `app.set('view engine':'ejs')==<>== key:value-> value is name of template engine`
        by default search file inside views folder
        if you want to change views folder by another name [app.set('views',path.resolve(__dirname)+'/templates')]

        change extension .html to .ejs (If you are using ejs template engine )

# Use views file

                `app.get('/',(req,res)=>{
                        res.render('index')
                })`

                setDynamic Variable `app.get('/',(req,res)=>{
                        res.render('index',{
                                title:"home Page "
                        })
                })`

                useIn Ejs <title><%= title %></title> getting value from routes

# include() function in ejs

                it is usefull for repeated code just like header footer

# express Routes

<script>
        import express from "express";
        const router = express.Router();
        router.get('/',(req,res)=>{
                
        })
        export default router;
</script>
