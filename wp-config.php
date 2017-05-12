<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'edens');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'cwrdsXKnr$qV~CP3&=o24ORjGTyE(B=*D8X|5[R&jkK*s y%flg!PmN`pnd&fdMK');
define('SECURE_AUTH_KEY',  'PzH>aM>{`!k3)VCI]oV6iE B9fHY):Dl#;^b93s_pZ+um(|aIT@mhkr&O8?-GS/o');
define('LOGGED_IN_KEY',    '`Q~{t1ma}o3e8:L2 N{+YqpZ;x0;c0Jb-B#N$Y<UEd2i8P/[^VTQklah:eg/EJ2a');
define('NONCE_KEY',        '~8f|r>QM]35tu N8ha6.s9#EE#[k<or>KD3PzGnv<.e~O7<%_U_blu1L$x&Vu]r0');
define('AUTH_SALT',        'x:lM#UrtLI{J!M1#0Xn~:QnO(OtO3O+8qA(YPm+Q2p *mNi<O}jnV}`+wJf^2whg');
define('SECURE_AUTH_SALT', 'ZRIc{$#L,}mbVS* y0w*Y>u`?dYq$RHWd2v$ktBBGv<@uH0z*_OPXW_Y}[qNJ>ES');
define('LOGGED_IN_SALT',   '8F~>zQ7f4{czM$wLDfc-)L.H~Y3iQW[ .l.D|?!NZ6D3b@fCsq}$0h~`;<=.iA7m');
define('NONCE_SALT',       '|rb#->I@bXmN;x)YhLvU&]7^Y_m_n2nD# O}YLVl=#0IjS/7YQ*b_erV?L>spQOA');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');