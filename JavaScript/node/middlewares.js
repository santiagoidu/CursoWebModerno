// middleware pattern (chain of resposibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (etx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](etx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const etx = {}
exec(etx, passo1, passo2, passo3)
console.log(etx)

