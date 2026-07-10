import httpx

from app.config import settings


class BackendClient:
    """
    Client responsible for communicating
    with the Express backend.
    """

    def __init__(self):
        self.base_url = settings.BACKEND_API_URL

    async def get_tasks(self):
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.base_url}/tasks"
            )

            response.raise_for_status()

            return response.json()

    async def create_task(
        self,
        title: str,
        description: str | None,
        priority: str,
    ):
        payload = {
            "title": title,
            
            "priority": priority,
        }
        if description:
            payload["description"] = description

        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.base_url}/tasks",
                json=payload,
            )

            print("\n========== REQUEST ==========")
            print(payload)

            print("\n========== RESPONSE ==========")
            print("Status:", response.status_code)
            print(response.text)

            response.raise_for_status()

            return response.json()

    async def update_task(
        self,
        task_id: str,
        payload: dict,
    ):
        async with httpx.AsyncClient() as client:
            response = await client.patch(
                f"{self.base_url}/tasks/{task_id}",
                json=payload,
            )

            response.raise_for_status()

            return response.json()

    async def delete_task(
        self,
        task_id: str,
    ):
        async with httpx.AsyncClient() as client:
            response = await client.delete(
                f"{self.base_url}/tasks/{task_id}",
            )

            response.raise_for_status()

            return response.json()


backend_client = BackendClient()