apply( { plugins: ['babel', 'sass'] } )

babel( {
  presets: ['es2015'],
  sourceMaps: true
} )

task( 'print', { dependsOn: ['build'] }, () => {
  do$( () => {
    console.log('from print!')
  } )
} )


task( 'default', {
  dependsOn: ['print']
}, () => {
  do$( () => console.log( '!!default' ) )
} )