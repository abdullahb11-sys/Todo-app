from langgraph.checkpoint.memory import MemorySaver

from langgraph.graph import (
    StateGraph,
    START,
    END,
)

from langgraph.prebuilt import (
    ToolNode,
    tools_condition,
)

from app.models.state import AgentState
from app.agents.nodes import assistant_node
from app.agents.llm import TOOLS


builder = StateGraph(AgentState)

builder.add_node(
    "assistant",
    assistant_node,
)

builder.add_node(
    "tools",
    ToolNode(TOOLS),
)

builder.add_edge(
    START,
    "assistant",
)

builder.add_conditional_edges(
    "assistant",
    tools_condition,
    {
        "tools": "tools",
        END: END,
    },
)

builder.add_edge(
    "tools",
    "assistant",
)

memory = MemorySaver()

graph = builder.compile(
    checkpointer=memory,
)