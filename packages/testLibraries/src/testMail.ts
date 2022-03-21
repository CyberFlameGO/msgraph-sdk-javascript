import { GraphServiceClient } from "graph-service-library";
import { SimpleAuthenticationProvider } from "@microsoft/microsoft-graph-client";




const token = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IlJjaDFYU1o3SzhxdjUwQ2Exb3dqal9VaHRqUXlIZEtub3ZTQ0FnSFVtQk0iLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNGNjN2E0Mi0zYzQ0LTQ0ZjMtYWFmMy02NjYzMDJhZWFiMDgvIiwiaWF0IjoxNjQ3NTkxNTQ4LCJuYmYiOjE2NDc1OTE1NDgsImV4cCI6MTY0NzU5NjEwNSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZSWgwK3ZGenN2aVpIZzAzeDV0cmI2dkZ6NHhPNTJ6cmx4Zmp5ZllRcnc1TGV3QUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkNoZXR0aWFyIiwiZ2l2ZW5fbmFtZSI6Inp5YXlhbCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjczLjE2OS4xNDguNzIiLCJuYW1lIjoiTmlraXRoYSBVZGF5a3VtYXIgQ2hldHRpYXIiLCJvaWQiOiI4MTM5NTZhMy00YTMwLTQ1OTYtOTE0Zi1iZmQ4NmE2NTdhMDkiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDBEMjg0RkFDQSIsInB3ZF9leHAiOiIwIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BVmtBUW5yTTFFUTg4MFNxODJaakFxNnJDQU1BQUFBQUFBQUF3QUFBQUFBQUFBQlpBQlUuIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWQgQ2FsZW5kYXJzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkIENvbnRhY3RzLlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZC5BbGwgRGlyZWN0b3J5LlJlYWRXcml0ZS5BbGwgRW50aXRsZW1lbnRNYW5hZ2VtZW50LlJlYWRXcml0ZS5BbGwgRmlsZXMuUmVhZCBGaWxlcy5SZWFkLkFsbCBGaWxlcy5SZWFkV3JpdGUgRmlsZXMuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZCBNYWlsLlJlYWQuU2hhcmVkIE1haWwuUmVhZEJhc2ljIE1haWwuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlLlNoYXJlZCBNYWlsLlNlbmQgTWFpbGJveFNldHRpbmdzLlJlYWRXcml0ZSBOb3Rlcy5DcmVhdGUgTm90ZXMuUmVhZCBOb3Rlcy5SZWFkLkFsbCBOb3Rlcy5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlLkFsbCBvcGVuaWQgT3JnQ29udGFjdC5SZWFkLkFsbCBQZW9wbGUuUmVhZCBQZW9wbGUuUmVhZC5BbGwgUHJpbnRlci5GdWxsQ29udHJvbC5BbGwgUHJpbnRlci5SZWFkLkFsbCBQcmludGVyLlJlYWRXcml0ZS5BbGwgUHJpbnRlclNoYXJlLlJlYWQuQWxsIFByaW50ZXJTaGFyZS5SZWFkV3JpdGUuQWxsIHByb2ZpbGUgUmVwb3J0cy5SZWFkLkFsbCBTaXRlcy5GdWxsQ29udHJvbC5BbGwgU2l0ZXMuTWFuYWdlLkFsbCBTaXRlcy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWQgVGFza3MuUmVhZC5TaGFyZWQgVGFza3MuUmVhZFdyaXRlIFRhc2tzLlJlYWRXcml0ZS5TaGFyZWQgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoidG9waDEyYUVZMlpXOHdvczNZNjFpWlcyajlpNTVPa2tMWWRBT09idFpIcyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6ImQ0Y2M3YTQyLTNjNDQtNDRmMy1hYWYzLTY2NjMwMmFlYWIwOCIsInVuaXF1ZV9uYW1lIjoibmNoZXR0aWFAZ3JhcGhqc2RlbW8ub25taWNyb3NvZnQuY29tIiwidXBuIjoibmNoZXR0aWFAZ3JhcGhqc2RlbW8ub25taWNyb3NvZnQuY29tIiwidXRpIjoiMmNFNE5aZmJZRU9qT2lXSkJBTXJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJNWkJUSUFQQWNLUTRPSkxuREdzRW5EZHoxNkFzNmZFLTJ0NWVfLTZDdVRJIn0sInhtc190Y2R0IjoxNTk1NTM0ODMxfQ.dHyOePkVtl8I0Ruo46tyfMWQYKmM0iIWaPrVHktVS27-iYA7NYQ_TneeuzQ-tFGYa5oJh0UrOvTSssULy1UubLIAWCFtGsDtzTposcPPXQ3tV7k3Y-UOL4dfgNNeOHnpwyNjxKM4OGSVRMMmV89I5zd2sBw_yMPdwq5IiUmKyetDLOdINI8eGuT1MFWzkRX35pHHZpKXdPvzeYDL0kbIZC6LYc98gPB_Is8s6iujRgcZck4QxsVXJ0AL9abqFskEywLhOh4iM4oiwdAjxTjjLVxCla8cyEo5euyZnF5gg59zE8WXVFtw2rbk-sZWmQc5IKjSzOGZnbaP7xevlBh8wQ";
const authProvider = new SimpleAuthenticationProvider(async () => { return token; });
const serviceclient = GraphServiceClient.init({ authProvider });


async function test() {
    const messages = await serviceclient.usersById("813956a3-4a30-4596-914f-bfd86a657a09").messages.get();

    console.log(messages);

    // const coreMe = await serviceclient.api("/me").get();
    // console.log(coreMe);
}


test().catch(console.error);