import com.github.grading.entity.Player;
import com.github.grading.repository.impl.PlayerRepository;
import com.github.grading.repository.impl.UserRepository;
import org.hibernate.Metamodel;
import org.hibernate.query.Query;
import org.hibernate.Session;

import javax.persistence.metamodel.EntityType;

import java.util.List;

import static com.github.grading.utils.HibernateSessionFactoryUtil.getSession;

public class Main {

    public static void main(final String[] args) throws Exception {
        PlayerRepository playerRepository = new PlayerRepository();
        List<Player> all = playerRepository.findAll();
        System.out.println(all);

        UserRepository userRepository = new UserRepository();
        userRepository.findByLogin("1").ifPresent(System.out::println);

        final Session session = getSession();
        try {
            System.out.println("querying all the managed entities...");
            final Metamodel metamodel = session.getSessionFactory().getMetamodel();
            for (EntityType<?> entityType : metamodel.getEntities()) {
                final String entityName = entityType.getName();
                final Query query = session.createQuery("from " + entityName);
                System.out.println("executing: " + query.getQueryString());
                for (Object o : query.list()) {
                    System.out.println("  " + o);
                }
            }
        } finally {
            session.close();
        }
    }
}