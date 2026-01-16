# Em Python, declaramos listas de forma similar
tarefas = []

def adicionar_tarefa(tarefa):
    """Adiciona uma nova tarefa à lista."""
    tarefas.append(tarefa)

def listar_tarefas():
    """Exibe as tarefas numeradas."""
    print("Minhas tarefas:")
    # O 'enumerate' é a forma mais comum de pegar o índice e o valor ao mesmo tempo
    for i, t in enumerate(tarefas):
        print(f"{i} - {t}")

def remover_tarefa(indice):
    """Remove uma tarefa pelo índice informado."""
    # Verificamos se o índice existe para evitar erros
    if 0 <= indice < len(tarefas):
        tarefas.pop(indice)
    else:
        print("Índice inválido!")

# Testes
adicionar_tarefa("Estudar Python")
adicionar_tarefa("Criar portfólio")
listar_tarefas()

remover_tarefa(0)
listar_tarefas()