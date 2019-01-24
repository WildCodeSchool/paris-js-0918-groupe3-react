const sortApplicationsByCandidate = (arr) => {
    const arrCandidatesId = arr.map(e => e.id_candidates).sort((a, b) => a - b).filter((e, i, a) => e !== a[i - 1] || i === 0)

    const arrFinal = []
    for (let i = 0; i < arrCandidatesId.length; i++) {
        const objInfo = {}
        const arrFiltered = arr.filter(e => e.id_candidates === arrCandidatesId[i])
        const arrQR = arrFiltered.reduce((c, e) => {
            const obj = {}
            obj.question = e.question_text
            obj.reponse = e.answer_text
            c.push(obj)
            return c
        }, [])
        objInfo.id_candidates = arrFiltered[0].id_candidates
        objInfo.status_application = arrFiltered[0].status_application
        objInfo.QR = arrQR
        arrFinal.push(objInfo)
    }
    return arrFinal
}

module.exports = sortApplicationsByCandidate