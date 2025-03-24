public class Tarefa {
    private String titulo;
    private String descricao;

    // Construtor da classe Tarefa
    public Tarefa(String titulo, String descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    @Override
    public String toString() {
        return "Tarefa: " + titulo + "\nDescrição: " + descricao;
    }
}
