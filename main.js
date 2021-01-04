var url = "https://api.exchangeratesapi.io/latest?base="

async function convert() {
    var base = document.getElementById('Base').value;
    var out = document.getElementById('Output').value;
    var amount = document.getElementById('Amount').value;


    var final2;
    let response2 = await fetch(`${url}${base}`, { method: 'GET' })
    let data2 = await response2.json()
    final2 = data2.rates
    final2 = final2[out] * Number(amount)
    var result2 = `${final2} ${out}`
    var line1 = ` ${amount} ${base}= `
    var line2 = `  ${base} `
    document.getElementById('l1').innerText = line1
    document.getElementById('l2').innerText = line2
    document.getElementById('Converted2').innerText = result2


    var final;
    var amount1 = 1;
    let response = await fetch(`${url}${base}`, { method: 'GET' })
    let data = await response.json()
    final = data.rates
    final = final[out] * Number(amount1)
    var result = ` ${amount1} ${base} = ${final} ${out}`
    document.getElementById('Converted').innerText = result



    var final1;
    let response1 = await fetch(`${url}${out}`, { method: 'GET' })
    let data1 = await response1.json()
    final1 = data1.rates
    final1 = final1[base] * Number(amount1)
    var result1 = `${amount1} ${out} = ${final1} ${base}`
    document.getElementById('Converted1').innerText = result1
}