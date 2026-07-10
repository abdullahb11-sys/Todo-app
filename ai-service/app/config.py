from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application configuration.
    Loaded automatically from the .env file.
    """
    LLM_PROVIDER: str
    GROQ_API_KEY: str

    BACKEND_API_URL: str

    MODEL_NAME: str

    TEMPERATURE: float = 0

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()