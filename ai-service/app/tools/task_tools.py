from typing import Literal

from langchain_core.tools import tool

from app.services.backend_client import backend_client


@tool
async def create_task(
    title: str,
    description: str | None = None,
    priority: Literal["Low", "Medium", "High"] = "Medium",
):
    """
    Create a new task.

    Use this tool whenever the user wants to:
    - create a task
    - add a task
    - remember something
    """

    return await backend_client.create_task(
        title=title,
        description=description,
        priority=priority,
    )


@tool
async def get_tasks():
    """
    Retrieve every task.

    IMPORTANT:
    Use this tool whenever you need to identify a task
    before updating or deleting it.

    Never guess task ids.
    """

    return await backend_client.get_tasks()


@tool
async def delete_task(
    task_id: str,
):
    """
    Delete a task using its UUID.

    Always call get_tasks first if the user
    refers to a task by its title instead of
    its id.
    """

    return await backend_client.delete_task(task_id)


@tool
async def update_task(
    task_id: str,
    title: str | None = None,
    description: str | None = None,
    priority: Literal["Low", "Medium", "High"] | None = None,
):
    """
    Update an existing task.

    Always call get_tasks first if the user
    refers to a task by its title.

    Never invent task ids.
    """

    payload = {}

    if title is not None:
        payload["title"] = title

    if description is not None:
        payload["description"] = description

    if priority is not None:
        payload["priority"] = priority

    return await backend_client.update_task(
        task_id,
        payload,
    )