<?php

namespace App\Controller;

// use App\Entity\User;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api/user')]
class UserController extends AbstractController
{
    #[Route('/', name: 'user')]
    public function getUsers(UserRepository $repo, Request $req): Response
    {
        $data = $req->toArray();
        $users = $repo->searchUsers($data);
        return $this->sendResponse(json_encode($users));
    }

    #[Route('/{id}', name: 'user.show')]
    public function show(User $user): Response
    {
        return $this->sendResponse(json_encode($user));
    }

    #[Route('/new', name: 'user.new', methods:['POST'])]
    public function new(Request $req, UserRepository $repo, EntityManagerInterface $em): Response
    {
        $data = $req->toArray();
        $user = new User();
        $user->setName($data['name']);
        $user->setFirstname($data['firstname']);
        $user->setCode($this->generateCode($data['name'], $data['firstname'], $repo));
        $user->setPassword($this->generatePassword());
        $user->setAdress($data['adress']);
        $user->setPostCode($data['post_code']);
        $user->setCity($data['city']);
        $user->setPhone($data['phone']);
        $user->setEmail($data['mail']);
        $user->setRoles([$data['role']]);
        $user->setRegisteredAt(new DateTimeImmutable("now"));

        $em->persist($user);
        $em->flush();

        return $this->sendResponse(json_encode($user));
    }

    public function sendResponse($content){
        $resp = new Response();
        $resp->setContent($content);
        $resp->setStatusCode(Response::HTTP_OK);

        // sets a HTTP response header
        $resp->headers->set('Content-Type', 'application/json');
        return $resp;
    }

    private function generatePassword(){
        $password = '';
        for ($i=0; $i < 10; $i++) { 
            $password .= rand(0, 9);
        }
        return password_hash($password, PASSWORD_DEFAULT);
    }

    //génère les codes des livres et utilisateurs
    private function generateCode(string $a, string $b, UserRepository $repo){
        do{
            $code = strtoupper(substr($a, 0, 3)).strtoupper(substr($b, 0, 3)).$this->formatNumber(rand(1, 999), 3);
            $codeTestUser = $repo->findOneBy(['code' => $code]);
        }while($codeTestUser != null);
        return $code;
    }

    function formatNumber($n, $size){
        $n = strval($n);
        while(strlen($n) < $size){
            $n = '0'.$n;
        }
    }
}
