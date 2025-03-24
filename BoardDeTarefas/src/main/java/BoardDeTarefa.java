import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

public class BoardDeTarefa {

    private JFrame frame;
    private DefaultListModel<String> model;
    private JList<String> listaDeTarefas;
    private ArrayList<Tarefa> tarefas;

    public BoardDeTarefa() {
        tarefas = new ArrayList<>();
        frame = new JFrame("Board de Tarefas");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.setLayout(new BorderLayout());

        // Lista de Tarefas
        model = new DefaultListModel<>();
        listaDeTarefas = new JList<>(model);
        JScrollPane scrollPane = new JScrollPane(listaDeTarefas);
        frame.add(scrollPane, BorderLayout.CENTER);

        // Painel de Botões
        JPanel panel = new JPanel();
        frame.add(panel, BorderLayout.SOUTH);

        JButton btnAdicionar = new JButton("Adicionar Tarefa");
        panel.add(btnAdicionar);

        JButton btnRemover = new JButton("Remover Tarefa");
        panel.add(btnRemover);

        // Adicionar Tarefa
        btnAdicionar.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String titulo = JOptionPane.showInputDialog(frame, "Digite o título da tarefa:");
                if (titulo != null && !titulo.isEmpty()) {
                    String descricao = JOptionPane.showInputDialog(frame, "Digite a descrição da tarefa:");
                    if (descricao != null) {
                        // Criando uma nova tarefa com título e descrição
                        Tarefa novaTarefa = new Tarefa(titulo, descricao);
                        tarefas.add(novaTarefa);
                        model.addElement(novaTarefa.getTitulo());
                    }
                }
            }
        });

        // Remover Tarefa
        btnRemover.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                int selectedIndex = listaDeTarefas.getSelectedIndex();
                if (selectedIndex != -1) {
                    tarefas.remove(selectedIndex);
                    model.remove(selectedIndex);
                } else {
                    JOptionPane.showMessageDialog(frame, "Selecione uma tarefa para remover.");
                }
            }
        });

        frame.setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new BoardDeTarefa();
            }
        });
    }
}


