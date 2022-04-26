var admin = require("firebase-admin");

var serv = {
    "type": "service_account",
    "project_id": "laundry-management-syste-b26e2",
    "private_key_id": "766bcc4ad6d443524e2048f372dfff7c73cc39bc",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtk2Dpat7KvgvR\nhcreDkmLcptWjeH0IdaVK+gXpSWqKNJPNvA+c2FUBR1K/0mm25ovhtjajOa74lBy\nVHL8a9TPEvdzyFxeXWmmTBLOJdfbtMkWsaClGiS8ihj3SQ3D8weydt5FAmGsc6Yb\nnBVqx/XUB1s8huqAP3fCikSdie4f8gqxNnbf745aHGH6t1MisTO4dDJaxJWQWTll\nm/lMHNF1Ks/otC9kvU63GnpypR4N1LR4s72mn1X/u9HtbNZyYCbfndn7vWb8jLGt\nPiuOgHrErZsEcfQDGkqcnaycmSGKBh4XkQf6WSG1ee9vT+UPMVrAle7B7OBzLiPs\n0MIDjXi/AgMBAAECggEABdpIHGf4FhmJc/9uSHskn61Sm1bCdr+wqBsdTBvS6ja4\nO6BYWcmA38+CcbsJRvWI/lu9kuC+vGkuXyqqbIKBixpmAzGv6Nk3RZQBMJfpEe4J\nuCfnE7oppoVmaQ0hLC8cBO79uch9vIBa2rpFIszLRw5pVnviYgduPVonp5PizGGf\ncCdmEv+5tvL+I97+eVV++78FRyDZuU2SeB/Odb4FPBB1GtdwuVkEQGWOMrcCEJgt\nLTcZCZCVGl6byJ0raFeq8J68Lro/ro+kQ9Ymycy8Ra8of8+/54F6NcM/MfGA1uEv\nBLQQR4PU1phrefWGzNv7djSSGx7YKytz9cew57B8jQKBgQD3ghWwFa7k1maiEtja\nEtJn9XzbThbYtOGluJk0T+JMHIVc2Mj8r8u5p66WdgBFVNN5NCjs0n79wgFw/VVx\n7LBj3vPnj9Gi39/AnKs8MgOIQqEfrdMKS41D3Vdcx1kTOa9sW7/ulkQdQ51lPaz/\nVjp1Jlj9QXARbTrb6jffqfZeWwKBgQD1ug4b9GIBfUFZp3ie6BNjd86BmZ7vfmxG\nlUMNrb42DSPMII+JyqDv7jusIT1CtK9zBRLSoFYmdb8ce44S3EACYdXSKPBg9gOf\nubHVwtY09WoVi7Msv6gG8msGoEI7IF6jexwud6WmbbKq9NOxkskFcaQKDIGtpLte\nA3IBw6+kbQKBgDE4fGmlFj/J52UpzFgp0A/+gNL4B5EW/5y+RjFiBYXPUjIxpl6h\n8yi7kPu5AbrH8Lo0xkK6Zai/MRwwNRLP2BA0YVrWfgEe9ldOkLsK0ysA3Rv4rHRq\nq/AoD1yTBELPgPRSlquy1F7heGaOyl2I3102wBG1Nr0wdLkRLgVbvnPrAoGAH3Uw\nNTf2DAbDBP1BneZMBSHjWAgYpsRijC6zpN6nSTgpawqIFbXRIKY5EXI364BCLdFq\ndXh9TvMoAjd3GscDksp/myYOj/suv5YARENrNOBuMk/uIj5u/mSueuytTfB47Sjn\nlLNQi5vjkatCJquJ/J5tx7OOLnK2YfTC9aLdq4kCgYEA6AIxdNoDTaArqQRD6EfN\nyNxmRdciSjChnDTaeEZT/E/nkvxlHnvCeuoP3Sw8TiW6lP0NrmU3dhiycT20bpK8\nRNe9rfRxlVgTbSye41LbMtkBdLJvTlT6ev7VlnnuAuOv4UOC+WsJHxuN5AF1kGAb\nckwPkVOX9YXj2u2bsn6rHZ8=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-qckce@laundry-management-syste-b26e2.iam.gserviceaccount.com",
    "client_id": "108071072224211782540",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qckce%40laundry-management-syste-b26e2.iam.gserviceaccount.com"
  }

admin.initializeApp({
  credential: admin.credential.cert(serv)
});

const db = admin.firestore()

function update(status, uid){
    
    db.collection("Orders").doc(uid).update({status: status})

}

module.exports.startProcess = (uid) =>{

    setTimeout(() => {
        update("Washing",uid)
    }, 1000 * 60 * 60 )
    
    setTimeout(() => {
        update("Drying",uid)
    }, 1000 * 60 * 120)
    
    setTimeout(() => {
        update("Ironing",uid)
    }, 1000 * 60 * 150)
    
    setTimeout(() => {
        update("Ready for pickup",uid)
    }, 4000)
    
}