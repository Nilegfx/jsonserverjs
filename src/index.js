import { create, router as jsonServerRouter, defaults } from 'json-server' ;

const server      = create();
const router      = jsonServerRouter( 'db.json' );
const middlewares = defaults();
const PORT        = process.env.PORT || 3000;

//default json-server middlewares
server.use( middlewares );

server.use( router );

server.listen( PORT, () => {
  console.log( `http://localhost:${PORT}` );
} )
