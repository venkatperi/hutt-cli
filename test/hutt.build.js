apply( { plugins: ['babel', 'sass'] } )

babel( {
  presets: ['es2015'],
  sourceMaps: true
} )

task( 'print', { dependsOn: ['build'] }, () => {
  do$( () => {
  } )
} )


task( 'default', {
  dependsOn: ['print']
}, () => {
  do$( () => console.log( '!!default' ) )
} )