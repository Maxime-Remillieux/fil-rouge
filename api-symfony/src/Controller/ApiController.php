<?php

namespace App\Controller;

use App\Entity\Book;
use App\Entity\User;
use App\Repository\BookRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    #[Route('/api/get/books', name: 'api.get.books')]
    public function getBooks(BookRepository $repo, Request $req) : Response
    {
        $data = $req->toArray();
        $books = $repo->searchBooks($data);
        return $this->sendResponse(json_encode($books));
    }

    #[Route('/api/get/users', name: 'api.get.users')]
    public function getUsers(UserRepository $repo, Request $req) : Response
    {
        $data = $req->toArray();
        $users = $repo->searchUsers($data);
        return $this->sendResponse(json_encode($users));
    }

    public function sendResponse($content){
        $resp = new Response();
        $resp->setContent($content);
        $resp->setStatusCode(Response::HTTP_OK);

        // sets a HTTP response header
        $resp->headers->set('Content-Type', 'application/json');
        return $resp;
    }
}
