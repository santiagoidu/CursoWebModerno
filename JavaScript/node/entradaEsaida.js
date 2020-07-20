const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('FALA ANONIMO\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu Nome:')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n','' )
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}