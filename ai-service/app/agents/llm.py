from langchain_groq import ChatGroq

from app.config import settings

from app.tools.task_tools import (
    create_task,
    get_tasks,
    update_task,
    delete_task,
)

TOOLS = [
    create_task,
    get_tasks,
    update_task,
    delete_task,
]


def get_llm():
    provider = settings.LLM_PROVIDER.lower()

    if provider == "groq":
        llm = ChatGroq(
            api_key=settings.GROQ_API_KEY,
            model=settings.MODEL_NAME,
            temperature=settings.TEMPERATURE,
        )

        return llm.bind_tools(TOOLS)

    raise ValueError(f"Unsupported provider: {provider}")