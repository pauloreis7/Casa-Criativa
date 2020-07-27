
const sqlit3 = require("sqlite3").verbose()

const db = new sqlit3.Database('./casa-criativa.db')

  db.serialize(function() {

    //Criar a tabela

    db.run(`CREATE TABLE IF NOT EXISTS ideas (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        image TEXT,

        title TEXT,

        category TEXT,

        description TEXT,

        link TEXT

      ); 
    
    `)
    
    //Inserir dados na tabela

  //  const query = `
  //  INSERT INTO ideas (
  //   image,
  //   title,
  //   category,
  //   description,
  //   link
  // ) VALUES(?,?,?,?,?);

  //  `

  //  const values = [
  //   "https://image.flaticon.com/icons/svg/2729/2729007.svg",
  //   "Cursos de Programação",
  //   "Estudo",
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur nihil",
  //   "https://rocketseat.com.br"
  //  ]

  //  db.run(query, values, function(err) {
  //    if (err) return console.log(err)

  //    console.log(this)
  //  })
    
  //Consultar a tabela

  //db.all(`SELECT * FROM ideas`, function(err, rows){
      // if (err) return console.log(err)

      // console.log(rows)
  // })
  
  //Deletar dados da tabela

  // db.all(`DELETE FROM ideas WHERE id = 9`, function(err){
  //     if (err) return console.log(err)

  //     console.log("DELETEI", this)
  // })

})

module.exports = db