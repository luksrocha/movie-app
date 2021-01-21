import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default mySchema = appSchema({
  version:1,
  tables:[
    tableSchema({
      name:'movies',
      columns:[
        {name:'title', type:'string'},
        {name:'poster_path',type:'string'},
        {name:'runtime',type:'number'},
        {name:'vote_average',type:'number'},
      ]
    })
  ]
})